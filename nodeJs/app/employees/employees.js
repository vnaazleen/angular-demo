const express = require("express")
const router = express.Router()

var dataFile = require("../../data/data.json")

router.get("/employees", function(req, res) {
    let result = '<ul>'
    dataFile.employees.forEach((employee) => {
        result += `
            <li>
                <p>${employee.empId}</p>
                <p>${employee.empName}</p>
                <p>${employee.salary}</p>
            </li>
        `
    })

    result += '</ul>'

    res.send(`${result}`)
})

router.get("/employees/index/:index", function(req, res) {

    let employee = dataFile.employees[req.params.index]
    let result = `
        <li>
            <p>${employee.empId}</p>
            <p>${employee.empName}</p>
            <p>${employee.salary}</p>
        </li>
    `
    res.send(result)
})

router.get("/employees/id/:id", function(req, res) {

    let employee = dataFile.employees[req.params.id - 1]
    let result = `
        <li>
            <p>${employee.empId}</p>
            <p>${employee.empName}</p>
            <p>${employee.salary}</p>
        </li>
    `
    res.send(result)
})

module.exports = router