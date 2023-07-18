/* eslint-disable no-unused-vars */
import React from "react";
import "./JobCard.scss";
import InputSearch from "../../atoms/inputSearch/InputSearch";
import InputDrop from "../../atoms/inputDrop/InputDrop";
import Tags from "../../atoms/tags/Tags";
import JobDetails from "../jobDetails/JobDetails";

const JobCard = () => {
  return (
    <div className="container job-search_card">
      <h1 className="job-section_title">Locuri de munca disponibile</h1>
      <hr />
      <form>
        <InputSearch />
        <InputDrop type="text" placeholder="Oras" />
        <InputDrop type="text" placeholder="Alege departament" />
        <InputDrop type="text" placeholder="Tip job" />
        <button type="button">Cauta job</button>
      </form>
      <div className="tags">
        <div className="options">
          <Tags text="Norma intreaga" />
          <Tags text="Oradea" />
        </div>
        <div className="options">
          <Tags text="Norma intreaga" />
          <Tags text="Oradea" />
          <Tags text="Oradea" />
        </div>
      </div>
      <hr />
      <JobDetails title='Software Engineer' program='Norma intreaga' city='Oradea' />
      <hr />
      <JobDetails title='Software Engineer' program='Norma intreaga' city='Oradea' />
      <hr />
      <JobDetails title='Software Engineer' program='Norma intreaga' city='Oradea'/>
      <hr />
      <JobDetails title='Software Engineer' program='Norma intreaga' city='Oradea'/>
      <hr />
    </div>
  );
};

export default JobCard;
