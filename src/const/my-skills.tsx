import {
  awsLogo,
  azureLogo,
  dartLogo,
  javaLogo,
  ktLogo,
  oracleLogo,
  pyLogo,
  tsLogo,
  containerLogo,
  devopsLogo,
  nosqlLogo,
  sqlLogo,
  genaiLogo,
  mlLogo,
} from "../assets/skill";

export default {
  "Programming Languages": [
    {
      skill: "TypeScript",
      frameworks: ["React", "Next.js", "Node.js", "Express"],
      icon: tsLogo,
    },
    {
      skill: "Python",
      frameworks: ["FastAPI", "Django", "LangGraph"],
      icon: pyLogo,
    },
    {
      skill: "Dart",
      frameworks: ["Flutter", "GetX"],
      icon: dartLogo,
    },
    {
      skill: "Java",
      frameworks: ["Spring", "Hibernate", "Maven", "JUnit"],
      icon: javaLogo,
    },
    {
      skill: "Kotlin",
      frameworks: ["Jetpack Compose"],
      icon: ktLogo,
    },
  ],
  "Cloud Providers": [
    {
      skill: "AWS",
      frameworks: ["EC2", "S3", "Lambda"],
      icon: awsLogo,
    },
    {
      skill: "Azure",
      frameworks: ["App Services", "Functions", "Blob Storage"],
      icon: azureLogo,
    },
    {
      skill: "Oracle Cloud",
      frameworks: ["Compute", "Object Storage", "Functions"],
      icon: oracleLogo,
    },
  ],
  Database: [
    {
      skill: "SQL",
      frameworks: ["PostgreSQL", "MySQL", "Oracle", "SQLite"],
      icon: sqlLogo,
    },
    {
      skill: "NoSQL",
      frameworks: ["MongoDB", "Neo4j"],
      icon: nosqlLogo,
    },
  ],
  DevOps: [
    {
      skill: "DevOps Tools",
      frameworks: ["GitHub Actions", "Terraform"],
      icon: devopsLogo,
    },
    {
      skill: "Containerization",
      frameworks: ["Docker", "Kubernetes"],
      icon: containerLogo,
    },
  ],
  "Artificial Intelligence": [
    {
      skill: "ML",
      frameworks: ["TensorFlow", "PyTorch", "scikit-learn"],
      icon: mlLogo,
    },
    {
      skill: "Generative AI",
      frameworks: ["LangChain", "LangGraph"],
      icon: genaiLogo,
    },
  ],
};
