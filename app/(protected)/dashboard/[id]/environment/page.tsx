'use client';

import { FaBolt, FaCopy, FaDownload, FaEye, FaEyeSlash, FaPen } from 'react-icons/fa6';

import Dropdown from 'react-bootstrap/Dropdown';

export default function EnvironmentDetails() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">App Information</h4>
          </div>
          <div className="card-body">
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
                    <label>Target URL</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="https://www.example.com"
                    />
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
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your App description"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card pb-3">
          <div className="card-header d-flex justify-content-between">
            <h4 className="card-title">Environment Variables</h4>
            <div>
              <Dropdown className="custom-dropdown">
                <Dropdown.Toggle
                  variant="warning"
                  id="env"
                  className="d-flex justify-content-between align-items-center px-3"
                  bsPrefix="custom-dropdown-toggle"
                >
                  <span>Action</span>
                  <span className="custom-caret">▼</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <FaEye size={16} className="mr-2" /> View
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <FaPen size={16} className="mr-2" /> Edit
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <FaDownload size={16} className="mr-2" /> Download
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive-md">
              <table className="table tablesorter table table-borderless mx-0 px-0" id="">
                <input type="text" name="fakeuser" autoComplete="username" hidden />
                {/* to prevenet autofill by browsers */}
                <input type="password" name="fakepass" autoComplete="new-password" hidden />
                {/* to prevenet autofill by browsers */}
                <thead className="text-primary">
                  <tr>
                    <th className="w-50">KEY</th>
                    <th className="w-50">VALUE</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" className="form-control" autoComplete="off" />
                    </td>
                    <td>
                      <input type="password" className="form-control" autoComplete="off" />
                    </td>
                    <td className="w-auto">
                      <div className="d-flex justify-content-end">
                        <button className="btn btn-secondary mr-2 px-3">
                          <FaEyeSlash size={16} className="text-warning" />
                        </button>
                        <button className="btn btn-secondary px-3">
                          <FaCopy size={16} className="text-warning" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <button type="submit" className="btn btn-fill btn-warning px-3">
              Add New
            </button>
          </div>
        </div>
      </div>
      {/* <div className="col-md-4">
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
                <h5 className="title">Mike Andrew</h5>
              </a>
              <p className="description">Status Response</p>
            </div>
            <p />
            <div className="card-description">
              Do not be scared of the truth because we need to restart the human foundation in truth
              And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
