import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Skills = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/skills"); // check port
      return res.data;
    },
  });
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading skills</p>;

  return (
    <div>
      {data.map((skillCategory, idx) => (
        <div key={idx}>
          <h3>{skillCategory.title}</h3>
          <ul>
            {skillCategory.skills.map((skill, i) => (
              <li key={i}>{skill.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
