// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract HibernationSociety is ERC721Enumerable, Ownable {
    using SafeMath for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdTracker;

    uint256 public constant MAX_ELEMENTS = 7000;
    uint256 public constant PRICE = 80 * 10**18; // 80 Matic
    uint256 public constant PRESALE_PRICE = 65 * 10**18;
    uint256 public constant MAX_BY_MINT = 5;
    uint256 public constant MAX_BY_MINT_WHITELIST = 5;
    uint256 public constant MAX_WALLET = 5;
    uint256 public  MAX_RESERVE_COUNT = 200;
    uint256 public LAUNCH_TIMESTAMP = 1643403600; // Thu Sep 23 2021 00:00:00 GMT+0000

    bool public isPresaleOpen = false;
    bool public isRevealed = false;
    string private notRevealedtokenUri =
        "https://ipfs.io/ipfs/QmZbm8tWhQztYa2Zz1YLPW5zZkaahELn7mg5rLPuT7XNBB";
    mapping(address => bool) private _whiteList;
    mapping(address => uint256) private _whiteListClaimed;
    uint256 private _reservedCount = 0;
    uint256 private _reserveAtATime = 40;

    string public baseTokenURI;

    event CreateHibernationBear(uint256 indexed id);

    constructor(string memory baseURI) ERC721("Hibernation Society", "HBNS") {
        setBaseURI(baseURI);
    }

    modifier saleIsOpen() {
        if (_msgSender() != owner()) {
            require(block.timestamp >= LAUNCH_TIMESTAMP, "Sale is not open");
        }
        _;
    }

    function _totalSupply() internal view returns (uint256) {
        return _tokenIdTracker.current();
    }

    function totalMint() public view returns (uint256) {
        return _totalSupply();
    }

    function reserveTokens() public onlyOwner {
        require(
            _reservedCount + _reserveAtATime <= MAX_RESERVE_COUNT,
            "Max reserve exceeded"
        );
        uint256 i;
        for (i = 0; i < _reserveAtATime; i++) {
            _reservedCount++;
            _mintAnElement(msg.sender);
        }
    }

    function mint(uint256 _count) public payable saleIsOpen {
        uint256 total = _totalSupply();
        require(total + _count <= MAX_ELEMENTS, "Max limit");
        require(total <= MAX_ELEMENTS, "All hibernation bears are sold out");
        require(_count <= MAX_BY_MINT, "Exceeds number");
        require(
            balanceOf(_msgSender()) + _count <= MAX_WALLET,
            "Exceeds NFT's allowed per wallet"
        );
        require(msg.value >= salePrice(_count), "Value below price");

        for (uint256 i = 0; i < _count; i++) {
            _mintAnElement(_msgSender());
        }
        _withdraw(owner(), address(this).balance);
    }

    function presaleMint(uint256 _count) public payable {
        require(isPresaleOpen, "Presale is not open");
        require(_whiteList[msg.sender], "You are not in whitelist");
        require(_count <= MAX_BY_MINT_WHITELIST, "Incorrect amount to claim");
        require(
            _whiteListClaimed[msg.sender] + _count <= MAX_BY_MINT_WHITELIST,
            "Purchase exceeds max allowed"
        );
        require(
            balanceOf(_msgSender()) + _count <= MAX_WALLET,
            "Exceeds NFT's allowed per wallet"
        );
        uint256 total = _totalSupply();
        require(total + _count <= MAX_ELEMENTS, "Max limit");
        require(total <= MAX_ELEMENTS, "All hibernation bears are sold out");
        require(msg.value >= presalePrice(_count), "Value below price");

        for (uint256 i = 0; i < _count; i++) {
            _whiteListClaimed[msg.sender] += 1;
            _mintAnElement(msg.sender);
        }
        _withdraw(owner(), address(this).balance);
    }

    function airdropNFT(address[] memory winners) public onlyOwner {
        require(
            winners.length > 0,
            "Please provide the list of wallets for the airdrop"
        );
        for (uint256 i = 0; i < winners.length; i++) {
            _mintAnElement(winners[i]);
        }
    }

    function _mintAnElement(address _to) private {
        uint256 id = _totalSupply();
        _tokenIdTracker.increment();
        _safeMint(_to, id);
        emit CreateHibernationBear(id);
    }

    function salePrice(uint256 _count) public pure returns (uint256) {
        return PRICE.mul(_count);
    }

    function presalePrice(uint256 _count) public pure returns (uint256) {
        return PRESALE_PRICE.mul(_count);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseURI(string memory baseURI) public onlyOwner {
        baseTokenURI = baseURI;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        uint256 metaId = tokenId;
        string memory uriSuffix = ".json";
        string memory currentBaseURI = _baseURI();

        if (isRevealed) {
            return
                bytes(currentBaseURI).length > 0
                    ? string(
                        abi.encodePacked(
                            currentBaseURI,
                            uint2str(metaId),
                            uriSuffix
                        )
                    )
                    : "";
        }
        else{
            return string(abi.encodePacked(notRevealedtokenUri));
        }
    }

    function walletOfOwner(address _owner)
        external
        view
        returns (uint256[] memory)
    {
        uint256 tokenCount = balanceOf(_owner);

        uint256[] memory tokensId = new uint256[](tokenCount);
        for (uint256 i = 0; i < tokenCount; i++) {
            tokensId[i] = tokenOfOwnerByIndex(_owner, i);
        }

        return tokensId;
    }

    function setPresaleOpen(bool _isPresaleOpen) external onlyOwner {
        isPresaleOpen = _isPresaleOpen;
    }

    function revealCollection() external onlyOwner{
        isRevealed = true;
    }


    function addToWhiteList(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            require(addresses[i] != address(0), "Null address found");

            _whiteList[addresses[i]] = true;
            _whiteListClaimed[addresses[i]] > 0
                ? _whiteListClaimed[addresses[i]]
                : 0;
        }
    }

    function addressInWhitelist(address addr) external view returns (bool) {
        return _whiteList[addr];
    }

    function removeFromWhiteList(address[] calldata addresses)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < addresses.length; i++) {
            require(addresses[i] != address(0), "Null address found");

            _whiteList[addresses[i]] = false;
        }
    }

    function setReserveAtATime(uint256 _count) public onlyOwner {
        _reserveAtATime = _count;
    }

    function setMaxReserveCount(uint256 _newCount) external onlyOwner{
        MAX_RESERVE_COUNT = _newCount;
    }

    function withdrawAll() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0);
        _withdraw(owner(), balance);
    }

    function _withdraw(address _address, uint256 _amount) private {
        payable(_address).transfer(_amount);
    }

    function uint2str(uint256 _i)
        internal
        pure
        returns (string memory _uintAsString)
    {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
}
