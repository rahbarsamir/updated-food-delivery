const admins = require('../model/admins')


try {
    const temp=new admins({
        username:"admin2025",
        fName:"rahbar",
        lName:"samir",
        email:"rahbarsamir@gmail.com",
        phoneNumber:9064010758,
        rank:"admin",
        password:"sam2025"
    })
    await temp.save()
    console.log("added")
} catch (error) {
    console.log(error)
    
}