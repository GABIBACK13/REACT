import { useEffect, useState } from "react";
import axios from "../../services/axios";

import Table from "../../components/Table";

export default function Students() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function getData() {
      await axios.get("/alunos").then(({ data }) => setStudents(data));
    }
    getData();
  }, []);

  return (
    <div>
      <Table aluno={students} />
    </div>
  );
}
