<template>
  <div class="container-fluid">
    <h1 class="h3 mb-2 text-gray-800">Add worker</h1>
    <form>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter name here"
              required
            />
          </div>
          <div class="form-group">
            <label for="workerIdNumber">Valid identity proof</label>
            <input
              type="text"
              class="form-control"
              id="workerIdNumber"
              aria-describedby="workerIdNumberHelp"
              placeholder="Enter name here"
            />
            <small id="workerIdNumberHelp" class="form-text text-muted"
              >A valid goverment document id (Aadhar, DL, Voter Card etc.).</small
            >
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="form-group">
            <label for="exampleInputPassword1">Father's name</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

