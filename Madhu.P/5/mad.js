function addpass()
    {
    const container = document.getElementById("container");
    
      
      const newUserInput = document.createElement("div");
      newUserInput.innerHTML = `<label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br>
    
      <label for="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select><br>
    
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required><br>
    
      <label for="mobile">Mobile:</label>
      <input type="tel" id="mobile" name="mobile" required><br>
    
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" required><br><br><br><br><br>
        
      `;
      container.appendChild(newUserInput);
    }
    function removeDiv() {
     var divContainer = document.querySelector("#container");
      var divs = divContainer.getElementsByTagName("div");
      
        if (divs.length > 1) {
        // Remove the first div element
        divContainer.removeChild(divs[0]);
      }
    
    }
    function total()
    {
     var divContainer = document.querySelector("#container");
      var divs = divContainer.getElementsByTagName("div");
      const res=document.createElement("h1");
      res.innerHTML=("Total passengers are "+divs.length+" and cost is :"+divs.length*900);
    document.body.innerHTML = "";
    
      document.body.appendChild(res);
    }
    