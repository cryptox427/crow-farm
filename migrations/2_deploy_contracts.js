const CROWToken = artifacts.require("CrowToken");
const SyrupBar = artifacts.require("SyrupBar");
const MasterChef = artifacts.require("MasterChef");
const LotteryRewardPool = artifacts.require("LotteryRewardPool");
const SousChef = artifacts.require("SousChef");
const Timelock = artifacts.require("Timelock");

const addressCrowToken = "0xA28f59046Aa8e54f8663EEf377aC04E62Ce982F7";
const addressSyrupBar = "0x83e99D5325Ef98ceDF1abdB4D468452787C585e6";
const addressMasterChef = "0x7a88c1879f8C6aA10Fb0AbBEBBa664aB2AAF4F06";
const addressLotteryRewardPool = "0xd0F8B6Da9aC4ddEfd763092612556c5A40fB4e89";
const addressSousChef = "0x1BECADF03fd64CaFe3D8daa6b26970C6DF95Add6";
const addressTimelock = "0xc2E47049722eA4fa786B43A469F7AD05200aB404";

module.exports = function(deployer) {
    // deployer.deploy(CROWToken);
    // deployer.deploy(SyrupBar, addressCrowToken);
    // deployer.deploy(MasterChef, addressCrowToken, addressSyrupBar, "0x68aFAE7ca01e7a0F397E6b3d2DAd3b317f39325A", 1, 289300);
    // deployer.deploy(LotteryRewardPool, addressMasterChef, addressCrowToken, "0x68aFAE7ca01e7a0F397E6b3d2DAd3b317f39325A", "0x9c99bFE1189F847a78e2c4B06777baD68E4b0d90");
    // deployer.deploy(SousChef, addressSyrupBar, 10, 289000, 289500);
    deployer.deploy(Timelock, "0x68aFAE7ca01e7a0F397E6b3d2DAd3b317f39325A", 100000);
};
