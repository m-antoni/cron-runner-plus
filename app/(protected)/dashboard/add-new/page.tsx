'use client';

import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import EnvForm from '@/app/components/forms/EnvForm';
import AppForm from '@/app/components/forms/AppForm';

export default function AddNew() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <Link href={`/dashboard`} className="btn btn-secondary px-3">
                  <FaArrowLeft /> Back
                </Link>
              </div>
              <div>
                <Button variant="warning" className="px-3 mr-2">
                  Save
                </Button>
                <Link href={'/dashboard'} className="btn btn-secondary px-3">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        {/* APP INFORMATION */}
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">App Information</h4>
          </div>
          <div className="card-body">
            <AppForm />
          </div>
        </div>
      </div>
      <div className="col-md-12">
        {/* ENVIRONMENT VARIABLES */}
        <div className="card">
          <div className="card-body">
            <EnvForm />
          </div>
        </div>
      </div>
    </div>
  );
}
