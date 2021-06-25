function ProfessorRanker() {
  return (
    <div>
      <h2>Professor Ranker - A Better Rate My Professor</h2>
      <p class="bottom-paragraph">
        As a college student, I have to register for classes every quarter. Like
        most students, I try and register for the best professors I find on Rate
        My Professor.com. However, I find that some professors do not have many
        reviews and sometimes I find the reviews confusing and inconsistent.
        Additionally, it is very time consuming to look up each professor by
        hand. So, I decided to automate the process and use the{" "}
        <a href="https://www.washington.edu/assessment/course-evaluations/cec/">
          UW Course Evaluation Catalog
        </a>{" "}
        to my advantage. The UW Course Evaluation Catalog (UWCEC) is essentially
        an official internal Rate My Professor made by UW. In my opinion, it has
        better and more accurate evaluations of professors. By leveraging the
        UWCEC and Python, I was able to write a script that quickly finds the
        best professor for any class at UW. By writing this script, I not only
        saved myself time, but I also learned valuable webcrawling skills. Click{" "}
        <a href="https://github.com/eninodel/ProfessorRanker">here</a> to view
        the repository.
      </p>
    </div>
  );
}

export default ProfessorRanker;
