const express = require("express")
const drugs = require("./drugs")

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Catch bad JSON error

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server started running on ${PORT}`)
})

/// API's ///



//    1. GET /drugs/antibiotics
//       Return all drugs where category is "Antibiotic".
// API
app.get("/drugs/antibiotics", (req, res) => {
//       Return all drugs where category is "Antibiotic".
    const antibioticsDrugs = drugs.filter( drug => drug.category === "Antibiotic")

    res.json({
        message: `Antibiotics Drugs`,
        data: antibioticsDrugs
    })
})

//      2.GET /drugs/names
//      Return an array of all drug names converted to lowercase.

app.get("/drugs/names", (req, res) => {

    const drugsNames = drugs.map( drug => drug.name.toLowerCase()).sort()

    res.json({
        message: `Drugs Name in lower-case & ALphabetical Order (Sorted)`,
        data: drugsNames
    })
})

// 3.POST /drugs/by-category
// Accept a category in the body and return all drugs under that category.

app.post("/drugs/by-category", (req, res) => {

    const by_category  = req.body.category
    
    // check if there is nothing in the body
    // ....
    
    const checkCat = drugs.find( cat => cat.category.toLowerCase() === by_category.toLowerCase())

    if (!checkCat) {
        res.json(`there is no \'${by_category}\' category, please check and try again`)
    }else{
        res.json({
            message: `Drugs under category: ${by_category}`,
            data: drugs.filter( drug => drug.category.toLowerCase() == by_category.toLowerCase())
        })
    }
})

// 4.GET /drugs/names-manufacturers
// Return an array of objects showing each drug’s name and manufacturer.

app.get("/drugs/names-manufacturers", (req, res) => {

    const namesManufacturer = drugs.map( (drug) => {

        return {
                drugsNames: drug.name,
                manufacturer: drug.manufacturer
        }

    })
        res.json({
            message: `Drugs Name with Manufacturer`,
            data: namesManufacturer
        })
})

// 5.GET /drugs/prescription
// Return all drugs where isPrescriptionOnly is true.

app.get("/drugs/prescription-only", (req, res) => {

    const prescriptionDrugs = drugs.filter( drug => drug.isPrescriptionOnly)

    res.json({
        message: `Drugs that require a Prescription`,
        data: prescriptionDrugs
    })
})

// 6. GET /drugs/formatted
// Return a new array where each item is a string like: "Drug: [name] - [dosageMg]mg"

app.get("/drugs/formatted", (req, res) => {

    const drugsFormatted = drugs.map( drug => `Drug: ${drug.name} - ${drug.dosageMg}mg`)

    res.json({
        message: `List of Drugs with Dosage in MG`,
        data: drugsFormatted
    })
})

// 7.GET /drugs/low-stock
// Return all drugs where stock is less than 50.

app.get("/drugs/low-stock", (req, res) => {

    const lowStock = drugs.filter( drug => drug.stock < 50)

    res.json({
        message: `Drugs with stock less than 50 (Low Stock)`,
        data: lowStock
    })
})

// 8.GET /drugs/non-prescription
// Return all drugs where isPrescriptionOnly is false.

app.get("/drugs/non-prescription", (req, res) => {

    const nonPrescription = drugs.filter( drug => !drug.isPrescriptionOnly)

    res.json({
        message: `Drugs that does not require a Prescription`,
        data: nonPrescription
    })
})

// 9.POST /drugs/manufacturer-count
// Accept a manufacturer in the body and return how many drugs are produced by that manufacturer.
// Example body: { "manufacturer": "Pfizer" }

app.post("/drugs/manufacturer-count", (req, res) => {

    const theManufacturer = req.body.manufacturer

    const check = drugs.find( checkCom => checkCom.manufacturer.toLowerCase() === theManufacturer.toLowerCase())

    if (!check) {

        res.json(`there is no \'${theManufacturer}\' Manufacturer, please check and try again`)
        
    } else {
        const manufacturerCount = drugs.filter( drug => drug.manufacturer.toLowerCase() === theManufacturer.toLowerCase()).length

        res.json({
            message: `${theManufacturer} Company, Produced ${manufacturerCount} Drugs`
        })
    }
})

// 10. GET /drugs/count-analgesics
// Count and return how many drugs have the category "Analgesic".

app.get("/drugs/count-analgesics", (req, res) => {

    let count = 0

    drugs.forEach( (drug) => {

        if (drug.category === "Analgesic") {
            count++
        }
    })
        res.json({
            message: `Total Drugs in Analgesic Category: ${count}`,
        })
})