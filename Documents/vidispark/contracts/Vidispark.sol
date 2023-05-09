// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vidispark is ERC721, ERC20, Ownable {

    function _mint(address to, uint256 tokenId) internal override(ERC721, ERC20) {
        ERC721._mint(to, tokenId);
        ERC20._mint(to, tokenId);
    }
    // NFT-based Creations
    struct NFT {
        string name;
        string image;
    }
    mapping(uint256 => NFT) public nfts;


    // Social Tokens
    string public constant name = "VDP Token";
    string public constant symbol = "VDP";
    uint8 public constant decimals = 18;
    uint256 public constant initialSupply = 1000000 * 10**uint256(decimals);
    mapping(address => bool) public whitelist;

    // Sponsorship Marketplace
    struct Sponsorship {
        address brand;
        address creator;
        string sponsorshipType;
        string description;
        uint256 startDate;
        uint256 endDate;
        uint256 amount;
        string status;
    }

    Sponsorship[] public sponsorships;

    // Gamified Experience
    struct Achievement {
        uint256 id;
        string name;
        string description;
        uint256 points;
        uint256 threshold;
    }
    mapping(address => uint256) public points;
    Achievement[] public achievements;

    constructor() ERC721("Vidispark NFT", "VDPNFT") ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }

    // NFT-based Creations
    function mintNFT(string memory name, string memory image) public {
        uint256 tokenId = totalSupply() + 1;
        _mint(msg.sender, tokenId);
        nfts[tokenId] = NFT(name, image);
    }

    // Social Tokens
    function addToWhitelist(address account) public onlyOwner {
        whitelist[account] = true;
    }

    function removeFromWhitelist(address account) public onlyOwner {
        whitelist[account] = false;
    }

    function buyTokens() public payable {
        require(whitelist[msg.sender], "You are not whitelisted to buy tokens");
        uint256 amount = msg.value * 100;
        _mint(msg.sender, amount);
    }

    function claimTokens() public {
        uint256 amount = 100;
        _mint(msg.sender, amount);
    }

    // Sponsorship Marketplace
    function createSponsorship(
        address brand,
        string memory sponsorshipType,
        string memory description,
        uint256 startDate,
        uint256 endDate,
        uint256 amount
    ) public {
        Sponsorship memory sponsorship = Sponsorship(brand, msg.sender, type, description, startDate, endDate, amount, "Pending");
        sponsorships.push(sponsorship);
    }

    function approveSponsorship(uint256 index) public onlyOwner {
        Sponsorship storage sponsorship = sponsorships[index];
        sponsorship.status = "Approved";
        transfer(sponsorship.brand, sponsorship.amount);
    }

    function rejectSponsorship(uint256 index) public onlyOwner {
        Sponsorship storage sponsorship = sponsorships[index];
        sponsorship.status = "Rejected";
    }

    // Gamified Experience
    function createAchievement(
        uint256 id,
        string memory name,
        string memory description,
        uint256 points,
        uint256 threshold
    ) public onlyOwner {
        Achievement memory achievement = Achievement(id, name, description, points, threshold);
        achievements.push(achievement);
    }

    function claimAchievement(uint256 index) public {
    Achievement storage achievement = achievements[index];
    require(points[msg.sender] >= achievement.threshold, "You don't have enough points to claim this achievement");
    points[msg.sender] -= achievement.threshold;
    _mint(msg.sender, achievement.points);
}

}
