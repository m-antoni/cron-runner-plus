import {
  FaCopy,
  FaDownload,
  FaEye,
  FaFileLines,
  FaGear,
  FaPen,
  FaPenToSquare,
  FaWandMagicSparkles,
} from 'react-icons/fa6';

import { Dropdown } from 'react-bootstrap';
import { FaPlusCircle } from 'react-icons/fa';

export default function EnvForm({ showHeader = true }) {
  return (
    <>
      <form>
        {showHeader && (
          <div className="d-flex justify-content-between">
            <div>
              <h4 className="card-title">Environment Variables</h4>
              <p className="category">
                Set environment-specific config and secrets (such as API key)
              </p>
            </div>
            <div>
              <div className="d-flex justify-content-end">
                <button className="btn btn-secondary mr-2 px-3">
                  <FaPenToSquare size={16} className="text-warning" />
                </button>
                <button className="btn btn-secondary mr-2 px-3">
                  <FaCopy size={16} className="text-warning" />
                </button>
                <button className="btn btn-secondary mr-2 px-3">
                  <FaDownload size={16} className="text-warning" />
                </button>
              </div>
            </div>
          </div>
        )}
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
                    <Dropdown className="right-dropdown">
                      <Dropdown.Toggle
                        variant="secondary"
                        id="env"
                        className="d-flex justify-content-between align-items-center px-3"
                        bsPrefix="custom-dropdown-toggle"
                      >
                        <span>
                          <FaGear />
                        </span>
                        <span className="custom-caret">▼</span>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#">
                          <FaEye size={16} className="mr-2" /> View
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <FaCopy size={16} className="mr-2" /> Copy
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                          <FaPen size={16} className="mr-2" /> Edit
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end pb-4">
            <Dropdown className="right-dropdown mr-2">
              <Dropdown.Toggle
                variant="secondary"
                id="env"
                className="d-flex justify-content-between align-items-center px-3"
                bsPrefix="custom-dropdown-toggle"
              >
                <span>Add</span>
                <span className="custom-caret">▼</span>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">
                  <FaPlusCircle size={16} className="mr-2" /> New
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <FaWandMagicSparkles size={16} className="mr-2" /> Generate Secret
                </Dropdown.Item>
                <Dropdown.Item href="#">
                  <FaFileLines size={16} className="mr-2" /> Import from .ENV
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </form>
    </>
  );
}
