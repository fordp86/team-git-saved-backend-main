"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHousehold = exports.deleteHousehold = exports.createHousehold = exports.getHousehold = exports.getAllHouseholds = void 0;
const household_1 = require("../models/household");
// get all households
const getAllHouseholds = async (req, res) => {
    household_1.Household.findAll().then(response => {
        res.status(200).json(response);
    });
    // let householdFound = await Parents.findAll();
    // res.status(200).json(householdFound)
};
exports.getAllHouseholds = getAllHouseholds;
// get household by id
const getHousehold = async (req, res) => {
    let householdId = req.params.id;
    let householdFound = await household_1.Household.findByPk(householdId).then(response => {
        res.status(200).json(response);
    });
};
exports.getHousehold = getHousehold;
// create household
const createHousehold = async (req, res) => {
    let household = req.body;
    console.log(household);
    if (household.name) {
        try {
            let created = await household_1.Household.create(household);
            res.status(201).json(created);
        }
        catch (err) {
            console.log(household);
            res.status(400).send();
        }
    }
    else {
        console.log(household);
        res.status(404).send();
    }
};
exports.createHousehold = createHousehold;
// delete household
const deleteHousehold = async (req, res) => {
    let householdId = req.params.id;
    let householdFound = await household_1.Household.findByPk(householdId);
    if (householdFound) {
        await household_1.Household.destroy({
            where: { householdId: householdId }
        }).then(response => {
            res.status(200).json();
        });
    }
    else {
        res.status(404).send();
    }
};
exports.deleteHousehold = deleteHousehold;
// update to update completed- household
const updateHousehold = async (req, res) => {
    let householdId = req.params.id;
    let householdBody = req.body;
    let householdFound = await household_1.Household.findByPk(householdId);
    // console.log(householdFound);
    if (householdFound) {
        await household_1.Household.update(householdBody, {
            where: {
                householdId: householdId
            }
        }).then(response => {
            res.status(200).send(response);
        });
    }
    else {
        res.status(404).send();
    }
};
exports.updateHousehold = updateHousehold;
