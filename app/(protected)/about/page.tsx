export default function About() {
  return (
    <div className="row">
      {/* <div className="col-md-8">
        <div className="card">
          <div className="card-header">
            <h5 className="title">Edit Profile</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-md-5 pr-md-1">
                  <div className="form-group">
                    <label>Company (disabled)</label>
                    <input
                      type="text"
                      className="form-control"
                      disabled=""
                      placeholder="Company"
                      defaultValue="Creative Code Inc."
                    />
                  </div>
                </div>
                <div className="col-md-3 px-md-1">
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      defaultValue="michael23"
                    />
                  </div>
                </div>
                <div className="col-md-4 pl-md-1">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" placeholder="mike@email.com" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pr-md-1">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company"
                      defaultValue="Mike"
                    />
                  </div>
                </div>
                <div className="col-md-6 pl-md-1">
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      defaultValue="Andrew"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Home Address"
                      defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 pr-md-1">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      defaultValue="Mike"
                    />
                  </div>
                </div>
                <div className="col-md-4 px-md-1">
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      defaultValue="Andrew"
                    />
                  </div>
                </div>
                <div className="col-md-4 pl-md-1">
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input type="number" className="form-control" placeholder="ZIP Code" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8">
                  <div className="form-group">
                    <label>About Me</label>
                    <textarea
                      rows={4}
                      cols={80}
                      className="form-control"
                      placeholder="Here can be your description"
                      value="Mike"
                      defaultValue={
                        "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                      }
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-fill btn-primary">
              Save
            </button>
          </div>
        </div>
      </div> */}
      <div className="col-12">
        <div className="card card-user">
          <div className="card-body">
            <p className="card-text"></p>
            <div className="author">
              <div className="block block-one" />
              <div className="block block-two" />
              <div className="block block-three" />
              <div className="block block-four" />
              <a href="javascript:void(0)">
                <img className="avatar" src="/assets/img/emilyz.jpg" alt="..." />
                <h5 className="title">Michael Antoni</h5>
              </a>
              <p className="description">🧠 Learn | 💻 Build | 🚀 Grow</p>
            </div>
            <p />
            <div className="card-description">
              Do not be scared of the truth because we need to restart the human foundation in truth
              And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
            </div>
          </div>
          <div className="card-footer">
            <div className="button-container">
              <button href="javascript:void(0)" className="btn btn-icon btn-round btn-facebook">
                <i className="fab fa-facebook" />
              </button>
              <button href="javascript:void(0)" className="btn btn-icon btn-round btn-twitter">
                <i className="fab fa-twitter" />
              </button>
              <button href="javascript:void(0)" className="btn btn-icon btn-round btn-google">
                <i className="fab fa-google-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
