import {
    BuidlerRuntimeEnvironment,
    DeployFunction,
} from "@nomiclabs/buidler/types";

const func: DeployFunction = async function (bre: BuidlerRuntimeEnvironment) {
    const { deploy } = bre.deployments;
    const { deployer } = await bre.getNamedAccounts();
    await deploy("Greeter", {
        from: deployer,
        // gas: 4000000,
        args: ["Hello from Buidler React!"],
    });
};
export default func;