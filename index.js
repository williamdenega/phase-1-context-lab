/* Your Code Here */

const createEmployeeRecord = function(arry){
    const employee = {
        firstName:arry[0],
        familyName: arry[1],
        title: arry[2],
        payPerHour: arry[3],
        timeInEvents: [],
        timeOutEvents:  [],
    }
    return employee
}

const createEmployeeRecords = function(arry){
    //arry.forEach(person =>createEmployeeRecord(person))
    return arry.map(function(person){
        return createEmployeeRecord(person)
    })
}

const createTimeInEvent = function(clockIn){
    let [date,hour] = clockIn.split(' ')

    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour,10),
        date,
    })
    return this
}

const createTimeOutEvent = function(clockOut){
    let [date,hour] = clockOut.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour,10),
        date,
    })
    return this

}

const hoursWorkedOnDate = function(date){

    let clockIn = this.timeInEvents.find(function(e){
        return e.date === date
    })

    let clockOut = this.timeOutEvents.find(function(e){
        return e.date === date
    })

    return (clockOut.hour - clockIn.hour)/100


}


const wagesEarnedOnDate = function(dayWorked){

    
    let dailyPay = hoursWorkedOnDate.call(this,dayWorked)*this.payPerHour

    return parseFloat(dailyPay.toString())

}

const findEmployeeByFirstName = function(arry,name){
    return arry.find(function(person){
        return person.firstName === name
    })


}
const calculatePayroll = function(arry){
    return arry.reduce(function(memo,person){
        return memo + allWagesFor.call(person)
    },0)

}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

