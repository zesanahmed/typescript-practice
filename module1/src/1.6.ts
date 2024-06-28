// Union types
// Intersection types

{

type FrontendDeveloper = "FakibazDeveloper" | "JuniorDeveloper";
type FullstackDeveloper = "FrontendDeveloper" | "ExpertDeveloper";

const frontendDeveloper : FrontendDeveloper = "FakibazDeveloper";

type User = {
    name : string;
    email : string;
    gender : "Male" | "Female";
    bloodGroup ?: "O+" | "A+" | "B+";
}


const user1 : User = {
    name : "Zesan",
    email : "zesanahmed593@gmail.com",
    gender : "Male",
    bloodGroup : "O+" 
}


type MERNDeveloper = {
    skills : string[];
    designation1 : "MERN Developer"
};

type BackendDeveloper = {
    skills : string[];
    designation2 : "Backend Developer";
}

type FullStackDeveloper = MERNDeveloper & BackendDeveloper;


const fullStackDeveloper : FullStackDeveloper = {
    skills : ["HTML", "CSS","EXPRESS"],
    designation1 : "MERN Developer",
    designation2 : "Backend Developer"
}

































}