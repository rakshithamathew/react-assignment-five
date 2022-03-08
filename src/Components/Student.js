import { useState } from "react";
import info from './data-dummy.json';
import { Link, Outlet, useNavigate } from "react-router-dom";


function Student() {
  const navi = useNavigate();
  const [data , setData] = useState(info);

  return (
    <>
      <center>
        
          <h1>Student List</h1>
        
        <button id="btn-add" onClick={() => navi("/AddStudent")}>
          <Link to='AddStudent'>AddStudent</Link>
        </button>
        
      </center>
<center>
      <table width="100%">
        <thead>
        <tr>
          <th>SI.NO</th>
          <th>NAME</th>
          <th>AGE</th>
          <th>COURSE</th>
          <th>BATCH</th>
          <th>CHANGE</th>
        </tr>
        </thead>
        <br/>
        <tbody>
          {
            data.map((d)=>(
              <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.age}</td>
                <td>{d.course}</td>
                <td>{d.batch}</td>  
                <td>
                  <Link to='/EditPage'>Edit</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Outlet />
</center>
    </>
  );
}
export default Student;
