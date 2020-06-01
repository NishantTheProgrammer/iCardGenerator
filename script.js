const jumbotron = document.querySelector('.jumbotron');




const switchTo = (type) =>
{

    if(type == "student")
    {
        document.querySelector('.emp').classList.add("disNone");
        document.querySelector('.scl').classList.remove("disNone");
        
        jumbotron.innerHTML = `
        <h1 class="display-4"><i class="fas fa-graduation-cap"></i> Hi, There</h1>
            <p class="lead">You can just simply fill out this form and download your genrated I-card</p>
            <hr class="my-4">
            
            <form class="mx-auto" style="max-width: 600px;">

                <div class="form-group"">
                    <input type="text" class="form-control" placeholder="Enrollment No" maxlength="10" id="rollNo">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" id="name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name of School/University" id="school">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Class" id="studentClass">
                </div>
                
                <div class="form-group">
                    <label for="dob">Date Of Birth</label>
                    <input type="date" id="dob" class="form-control" id="dob"> 
                </div>

                <button type="button"  class="btn btn-primary" onclick="printScard();">Download</button>
            </form>
        `;
    }
    else if(type == "company")
    {
        document.querySelector('.emp').classList.remove("disNone");
        document.querySelector('.scl').classList.add("disNone");
        jumbotron.innerHTML = `
        <h1 class="display-4"><i class="fas fa-building"></i> Hi, There</h1>
            <p class="lead">You can just simply fill out this form and download your genrated I-card</p>
            <hr class="my-4">
            
            <form class="mx-auto" style="max-width: 600px;" onsubmit="return printEcard();">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Employee ID" id="eID" maxlength="10">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Name" id="name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Company Name" id="cName">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Designation" id="designation">
                </div>
                
                
                <div class="form-group">
                    <label for="dob">Joined</label>
                    <input type="date" id="dob" class="form-control" id="dob">
                </div>

                <button type="button"  class="btn btn-primary" onclick="printEcard();">Download</button>
            </form>
        `;
    }
}
switchTo('student');


const  printScard = () =>
{
    const rollNo = document.querySelector('#rollNo').value;
    const name = document.querySelector('#name').value;
    const school = document.querySelector('#school').value;
    const studentClass = document.querySelector('#studentClass').value;
    const dob = document.querySelector('#dob').value;
    
    document.querySelector(".scl").innerHTML = `
    <h3 class="schoolName text-center">${school}</h3>
    <table class="table table-hover  my-3">
        <tbody class="text-left">
          <tr>
            <th>Enrollment No</th><td>${rollNo}</td>
        </tr>
        <tr>
            <th>Name</th><td>${name}</td>
        </tr>
        <tr>
            <th>Class/Degree</th><td>${studentClass}</td>
        </tr>
        <tr>
            <th>D.O.B</th><td>${dob}</td>
        </tr>
      </table>`;
        
    print();
    return false;
}
const  printEcard = () =>
{
    console.log("printing i card for company");


    const eID = document.querySelector('#eID').value;
    const name = document.querySelector('#name').value;
    const cName = document.querySelector('#cName').value;
    const designation = document.querySelector('#designation').value;
    const dob = document.querySelector('#dob').value;

    document.querySelector(".emp").innerHTML =    
    `<h3 class="schoolName text-center">${cName}</h3>
    <table class="table table-hover  my-3">
        <tbody class="text-left">
            <tr>
            <th>Employee ID</th><td>${eID}</td>
        </tr>
        <tr>
            <th>Name</th><td>${name}</td>
        </tr>
        <tr>
            <th>Designation</th><td>${designation}</td>
        </tr>
        <tr>
            <th>D.O.B</th><td>${dob}</td>
        </tr>
    </table>`;
    

    print();

    return false;
}
