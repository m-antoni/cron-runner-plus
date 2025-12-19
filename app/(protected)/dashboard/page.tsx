import ButtonGroup from '@/app/components/ui/ButtonGroup';
import Link from 'next/link';
import { FaCopy, FaEye, FaPlus, FaDownload, FaGear } from 'react-icons/fa6';

export default function Dashboard() {
  return (
    <>
      <div className="row">
        {/* <div className="col-md-12">
          <div className="card ">
            <div className="card-header">
              <h4 className="card-title"> Environment Variables</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive-md">
                <table className="table tablesorter " id="">
                  <thead className=" text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">$98,615</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        <div className="col-md-12">
          <div className="card card-plain mt-n2">
            <div className="card-header d-flex justify-content-between align-items-start">
              <div>
                {' '}
                <h4 className="card-title"> Environment Variables</h4>
                <p className="category">
                  Set environment-specific config and secrets (such as API key)
                </p>
              </div>
              <button type="submit" className="btn btn-fill btn-warning btn-sm">
                <FaPlus /> Add
              </button>
            </div>
            <div className="card-body mt-4">
              <div className="table-responsive-md">
                <table className="table tablesorter " id="">
                  <thead className=" text-primary">
                    <tr>
                      <th>App Name</th>
                      <th>Description</th>
                      <th>API Status</th>
                      <th className="text-center">Created At</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>eshop</td>
                      <td>MERRN Stack E-commerce web app</td>
                      <td>
                        <span className="badge bg-success text-dark">
                          <span className="fs-11">RUNNING</span>
                        </span>
                      </td>
                      <td className="text-center">02-21-2025</td>
                      <td>
                        <ButtonGroup id={1} />
                      </td>
                    </tr>
                    <tr>
                      <td>Learning System</td>
                      <td>Angular and MongoDB</td>
                      <td>
                        <span className="badge bg-danger text-dark">
                          <span className="fs-11">ERROR</span>
                        </span>
                      </td>
                      <td className="text-center">02-21-2025</td>
                      <td>
                        <ButtonGroup id={2} />
                      </td>
                    </tr>
                    <tr>
                      <td>BibleVerse App</td>
                      <td>TypeScript Next JS </td>
                      <td>
                        <span className="badge bg-secondary text-dark">
                          <span className="fs-11">INACTIVE</span>
                        </span>
                      </td>
                      <td className="text-center">02-21-2025</td>
                      <td>
                        <ButtonGroup id={2} />
                      </td>
                    </tr>
                    <tr>
                      <td>Inventory</td>
                      <td>MEAN Stack Web App</td>
                      <td>
                        <span className="badge bg-success text-dark">
                          <span className="fs-11">RUNNING</span>
                        </span>
                      </td>
                      <td className="text-center">02-21-2025</td>
                      <td>
                        <ButtonGroup id={3} />
                      </td>
                    </tr>
                    <tr>
                      <td>Weather App</td>
                      <td>Open weather api using React</td>
                      <td>
                        <span className="badge bg-success text-dark">
                          <span className="fs-11">RUNNING</span>
                        </span>
                      </td>
                      <td className="text-center">02-21-2025</td>
                      <td>
                        <ButtonGroup id={3} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
