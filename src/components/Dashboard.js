import dateFormat from "dateformat";
import React from "react";
import { BiTrash } from "react-icons/bi";
import useTourRequest from "../hooks/useTourRequest";
import tableClasses from "../styles/Table.module.css";
import Section from "./Section";
export default function Dashboard() {
  const { error, loading, tourist } = useTourRequest();

  return (
    <Section className="pt-120 pb-120">
      <div className="row">
        <div className="col-12">
          <table className={`${tableClasses.cmnTable} table`}>
            <thead className="bg--base">
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Destination</th>
                <th>Guest</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {error && (
                <tr>
                  <td colSpan={100}>Something Went Wrong Please Try Again</td>
                </tr>
              )}
              {loading && (
                <tr>
                  <td colSpan={100}>Loading</td>
                </tr>
              )}
              {!loading &&
                tourist.length !== 0 &&
                tourist.map((option, index) => (
                  <tr key={index}>
                    <td>
                      <div>{index}</div>
                    </td>
                    <td>
                      <div>{option.name}</div>
                    </td>
                    <td>
                      <div>{option.destination}</div>
                    </td>
                    <td>
                      <div>{option.guest}</div>
                    </td>
                    <td>
                      <span className="d-block">
                        {dateFormat(option.startDate, "paddedShortDate")} -{" "}
                        {dateFormat(option.endDate, "paddedShortDate")}
                      </span>
                    </td>
                    <td>
                      <div>
                        <span className="btn btn--danger btn-sm">
                          <BiTrash />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
