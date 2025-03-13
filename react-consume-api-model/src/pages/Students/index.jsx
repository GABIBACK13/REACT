import { useEffect, useState } from "react";
import axios from "../../services/axios";

import Table from "../../components/Table";
import Loading from "../../components/Loading";
import { get } from "lodash";
import { toast } from "react-toastify";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import colors from "../../config/colors";

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
    <div style={{ display: "flex", alignItems: "center", flexFlow: "column" }}>
      <Loading isLoading={loading} />

      <Table aluno={students} key={students.length} />
      <Link to="/student">
        <FaPlus
          color={colors.primary}
          size={32}
          style={{ marginTop: "1rem", cursor: "pointer" }}
          title="ADD STUDENT"
          aria-label="add student"
        />
      </Link>
    </div>
  );
}
