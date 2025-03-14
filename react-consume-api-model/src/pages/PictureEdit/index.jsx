import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { FormPicture } from "./styled-picture.js";
import { get } from "lodash";
import axios from "../../services/axios";
import { toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { authState } from "../../store/Auth/atoms";

export default function PictureEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authState);
  const [fileUrl, setFileUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        setFileUrl(get(data, "Files[0].url", ""));
        setLoading(false);
      } catch (error) {
        toast.error("Error fetching image data");
        setLoading(false);
        setTimeout(() => {
          navigate("/students", { replace: true });
        }, 1200);
      }
    }
    fetchData();
  }, [id]);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    const pictureUrl = URL.createObjectURL(file);
    setFileUrl(pictureUrl);

    const formData = new FormData();
    formData.append("archive", file);
    formData.append("aluno_id", id);

    try {
      setLoading(true);
      await axios.post("/archive", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Picture saved successfully");
      setLoading(false);
    } catch (error) {
      const status = get(error, "response.status", 0);
      if (status === 401) {
        setAuth({
          isAuthenticated: false,
          token: null,
          user: {},
        });
        toast.error("Session expired. Please log in again.");
        setLoading(false);
        navigate("/login", { replace: true });
      } else {
        toast.error("Error saving picture");
        setLoading(false);
      }
    }
  };

  return (
    <div className="container">
      <Loading isLoading={loading} />
      <h1>Edit the Photo</h1>
      <FormPicture>
        <label htmlFor="file">
          {fileUrl ? (
            <img crossOrigin="anonymous" src={fileUrl} alt="student_Photo" />
          ) : (
            "Add Photo"
          )}
          <input
            type="file"
            id="file"
            accept="image/png, image/jpeg"
            onChange={(e) => handleChange(e)}
          />
        </label>
      </FormPicture>
    </div>
  );
}
