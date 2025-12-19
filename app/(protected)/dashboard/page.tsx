import ButtonGroup from '@/app/components/ui/ButtonGroup';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="card-title"> List of Applications</h4>
                </div>
                <div>
                  <Link href={'/dashboard/add-new'} className="btn btn-warning px-3">
                    Add New
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="card-footer d-flex justify-content-end"></div> */}
          </div>
        </div>
        <div className="col-md-12">
          <div className="card ">
            <div className="card-header"></div>
            <div className="card-body">
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
