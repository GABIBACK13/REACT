import { useEffect, useState } from "react";
import axios from "../../services/axios";

import Table from "../../components/Table";
import Loading from "../../components/Loading";
import { get } from "lodash";
import { toast } from "react-toastify";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        await axios.get("/alunos").then(({ data }) => setStudents(data));
        setLoading(false);
      } catch (error) {
        const errors = get(error, "response.data", "");
        if (errors) toast.error(errors);

        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <Loading isLoading={loading} />

      <Table $aluno={students} />
    </div>
  );
}
