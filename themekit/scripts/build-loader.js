
addElementHeader();
addElementFooter();

//region wiki mod
// addWikiMod('gt', 'GregTech', 'media/wiki-main/gt.png', 'wiki/gregtech.html');
addWikiMod('impactCore', 'ImpactCore', 'media/wiki-main/ImapctCore.png', 'wiki/impactcore.html');
//endregion

// //region gregtech wiki
// addWikiItem('gregtechItems', 'Primitive Blast Furnace', '#', '../media/gregtech/BrickBlastFurnace.png');
// addWikiItem('gregtechItems', 'Large Steam Boiler', '#', '../media/gregtech/LargeBoilerBronze.png');
// addWikiItem('gregtechItems', 'Electric Blast Furnace', '#', '../media/gregtech/EBF.png');
// addWikiItem('gregtechItems', 'Large Steam Turbine', '#', '../media/gregtech/SteamLargeTrubine.png');
// addWikiItem('gregtechItems', 'Large Gas Turbine', '#', '../media/gregtech/GasLargeTrubine.png');
// addWikiItem('gregtechItems', 'Large HP Steam Turbine', '#', '../media/gregtech/SteamHPLargeTrubine.png');
// addWikiItem('gregtechItems', 'Large Plasma Turbine', '#', '../media/gregtech/PlasmaLargeTrubine.png');
// //endregion

var impact = [
    ["Coke Oven", "cokeoven", 1, 1, [2]],
    ["Primitive Water Pump", "primwaterpump", 1, 1, [4]],
    ["Saw Mill", "sawmill", 1, 1, [2]],
    ["Pyrolyse Oven", "purolyse", 1, 1, [2]],
    // ["Industrial Pulverizer", "IndustrialPulverizer", 1, 1, [2]],
    ["Advanced Pyrolyse Oven", "AdvPyrolyse", 1, 1, [4]],
    ["Electric Water Drilling Rig", "ElWater", 1, 1, [4]],
    ["Space Satellite", "SpaceSatellite", 1, 1, [3]],
    ["Communication Tower", "ParTower", 1, 1, [3]],
    ["Nuclear Reactor", "NuclearReactor", 1, 1, [5]],
    ["Parallel Super Computer", "ParComputer", 1, 1, [3]],
];
for (let key = 0; key < impact.length; key++) {
    addDude(impact[key])
}
// ["3D Printer", "3DPrint", 1, 1, [2]],
// addWikiItem('ItemsImpact', 'Blast Smelter', '', '../media/gregtech/BlastSmelter.png');
// addWikiItem('ItemsImpact', 'Freezer Solidifier', '', '../media/gregtech/ParFrezSolid.png');
// addWikiItem('ItemsImpact', 'Nuclear Reactor', '', '../media/gregtech/NuclearReactor.png');
// addWikiItem('ItemsImpact', 'Multi PBE Machine', '', '../media/gregtech/ParBPE.png');
// addWikiItem('ItemsImpact', 'Multi Laser Engraver', '', '../media/gregtech/ParLaser.png');
// addWikiItem('ItemsImpact', 'Multi Assembling Machine', '', '../media/gregtech/ParAssembler.png');
// addWikiItem('ItemsImpact', 'Multi Centrifuge', '', '../media/gregtech/ParCentrifuge.png');
// addWikiItem('ItemsImpact', 'Multi Electrolyzer', '', '../media/gregtech/ParElectr.png');
// addWikiItem('ItemsImpact', 'Multi Wire Factory', '', '../media/gregtech/ParWire.png');
// addWikiItem('ItemsImpact', 'Multi Supply Production', '', '../media/gregtech/ParSupply.png');
// addWikiItem('ItemsImpact', 'Multi Utility Machine', '', '../media/gregtech/ParUtill.png');
// addWikiItem('ItemsImpact', 'Multi Brewmenter', '', '../media/gregtech/ParBrew.png');
// addWikiItem('ItemsImpact', 'Multi Siftaration Unit', '', '../media/gregtech/ParSift.png');
// addWikiItem('ItemsImpact', 'Multi Mixer Machine', '', '../media/gregtech//ParMix.png');
// addWikiItem('ItemsImpact', 'Multi Maceration Stack', '', '../media/gregtech/ParMacer.png');
// addWikiItem('ItemsImpact', 'Multi Arc Furnace', '', '../media/gregtech/ParArc.png');
// addWikiItem('ItemsImpact', 'Multi Cutting Machine', '', '../media/gregtech/ParCutt.png');
// addWikiItem('ItemsImpact', 'Multi Extradification', '', '../media/gregtech/ParExtraDi.png');
// addWikiItem('ItemsImpact', 'Advanced Vacuum Freezer', '', '../media/gregtech/ParFreez.png');
// addWikiItem('ItemsImpact', 'Lapotronic Super Capacitor', '', '../media/gregtech/LSC.png');
