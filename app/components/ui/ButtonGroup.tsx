'use client';

import Link from 'next/link';
import { FaCopy, FaEye, FaPlus, FaDownload, FaBolt, FaEllipsis, FaGear } from 'react-icons/fa6';
import Dropdown from 'react-bootstrap/Dropdown';

type ButtonGroupProps = { id: number };

export default function ButtonGroup({ id }: ButtonGroupProps) {
  return (
    <div className="d-flex justify-content-end">
      <Dropdown className="right-dropdown">
        <Dropdown.Toggle
          variant="-secondary"
          id="env-options"
          className="d-flex justify-content-between align-items-center px-3"
          bsPrefix="custom-dropdown-toggle"
        >
          <span>
            <FaGear />
          </span>
          <span className="custom-caret">▼</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-navbar ml-3">
          <Dropdown.Item
            as={Link}
            href={`/dashboard/${id}/environment`}
            className="mt-n1 mb-n1 mr-n3 d-flex align-items-center"
          >
            <FaEye size={16} className="mr-2 ml-n1" /> Open
          </Dropdown.Item>

          <Dropdown.Item href="#" className="mt-n1 mb-n1 mr-n3 d-flex align-items-center">
            <FaBolt size={16} className="mr-2 ml-n1" /> Trigger
          </Dropdown.Item>

          <Dropdown.Item href="#" className="mt-n1 mb-n1 mr-n3 d-flex align-items-center">
            <FaCopy size={16} className="mr-2 ml-n1" /> Copy
          </Dropdown.Item>

          <Dropdown.Item href="#" className="mt-n1 mb-n1 mr-n3 d-flex align-items-center">
            <FaDownload size={16} className="mr-2 ml-n1" /> Download
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
