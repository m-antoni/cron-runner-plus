export default function AppForm() {
  return (
    <>
      <form>
        <div className="row">
          <div className="col-md-6 pr-md-1">
            <div className="form-group">
              <label>App Name</label>
              <input type="text" className="form-control" placeholder="Company" />
            </div>
          </div>
          <div className="col-md-6 pl-md-1">
            <div className="form-group">
              <label>App URL</label>
              <input type="text" className="form-control" placeholder="https://www.example.com" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 pr-md-1">
            <div className="form-group">
              <label>Technologies</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-6 pl-md-1">
            <div className="form-group">
              <label>Github</label>
              <input type="text" className="form-control" placeholder="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Description</label>
              <input type="text" className="form-control" placeholder="Your App description" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
