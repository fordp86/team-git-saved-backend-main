import { RequestHandler } from "express";
import { Household } from "../models/household"; 


// get all households

export const getAllHouseholds: RequestHandler = async (req, res) => {
    Household.findAll().then(response => {
        res.status(200).json(response)
    })

    // let householdFound = await Parents.findAll();
    // res.status(200).json(householdFound)

}


// get household by id

export const getHousehold: RequestHandler = async (req, res) => {
    let householdId = req.params.id;

    let householdFound = await Household.findByPk(householdId).then(response => {
        res.status(200).json(response)
    })


}


// create household
export const createHousehold: RequestHandler = async (req, res) => {

    let household = req.body;
    console.log(household);


    if (household.name) {
        try {
            let created = await Household.create(household)
            res.status(201).json(created)
        } catch (err) {
            console.log(household);
            res.status(400).send();
        }
    } else {
        console.log(household);
        res.status(404).send();
    }


}


// delete household
export const deleteHousehold: RequestHandler =async (req, res) => {

    let householdId = req.params.id;

    let householdFound = await Household.findByPk(householdId);

    if (householdFound) {
        await Household.destroy({
            where: { householdId: householdId}
        }).then(response => {
            res.status(200).json();
        })
    } else {
        res.status(404).send();
    }

    
}


// update to update completed- household


export const updateHousehold: RequestHandler =async (req, res) => {

    let householdId = req.params.id;
    let householdBody = req.body;

    let householdFound = await Household.findByPk(householdId);
// console.log(householdFound);

    if (householdFound) {
        await Household.update(householdBody, {
            where: {
                householdId: householdId
            }
        }).then(response => {
            res.status(200).send(response)
        })
    } else {
        res.status(404).send();
    }


    
}

