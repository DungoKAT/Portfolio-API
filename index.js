import express from "express";
import cors from "cors";
import Blogs from "./Blog.js";
import Projects from "./Project.js";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const AllData = {
    blogs: [...Blogs],
    projects: [...Projects],
};

app.get("/", (req, res) => {
    if (AllData) {
        res.status(200).json(AllData);
    } else {
        res.status(404).json({ message: "Not found" });
    }
});

app.get("/blogs", (req, res) => {
    if (Blogs) {
        res.status(200).json(Blogs);
    } else {
        res.status(404).json({ message: "Not found" });
    }
});

app.get("/blogs/:blogsPathname", (req, res) => {
    const { blogsPathname } = req.params;
    const foundBlog = Blogs.find((blog) => blog.pathname === blogsPathname);
    if (foundBlog) {
        res.status(200).json(foundBlog);
    } else {
        res.status(404).json({ message: "Not found" });
    }
});

app.get("/projects", (req, res) => {
    if (Projects) {
        res.status(200).json(Projects);
    } else {
        res.status(404).json({ message: "Not found" });
    }
});

app.get("/projects/:projectPathname", (req, res) => {
    const { projectPathname } = req.params;
    const foundProject = Projects.find(
        (project) => project.pathname === projectPathname
    );
    if (foundProject) {
        res.status(200).json(foundProject);
    } else {
        res.status(404).json({ message: "Not found" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
