import StatusSelect from '@/app/components/ui/StatusSelect';
import Link from 'next/link';
import { ListGroupItem } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Dashboard() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <h4 className="card-title">Dashboard</h4>
                </div>
                <div>
                  <Link href={'/jobs/add-new'} className="btn btn-warning px-3">
                    Add New
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center">
                <div className="card-title">Cron Jobs</div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <h1 className="text-primary ">5</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center">
                <div className="card-title">Success</div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <h1 className="text-primary ">5</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-center">
                <div className="card-title">Failed</div>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <h1 className="text-primary ">2</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ListGroup className="">
            <ListGroupItem className="bg-dark text-white list-group">
              <div className="d-flex align-items-center justify-content-between">
                <div className="">Schedule Jobs</div>
                <div className="d-flex align-items-center">
                  <StatusSelect />
                </div>
              </div>
            </ListGroupItem>
            <ListGroupItem className="text-white border-w">Cras justo odio</ListGroupItem>
            <ListGroupItem className="text-white border-w">Cras justo odio</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </>
  );
}
