import { create } from "zustand";

interface Symptoms {
  bodyparts: string;
  departments: string;
  symptom_id: string;
  symptoms: string;
  symptoms_abbr: string;
}
interface State {
  selectedGender: "male" | "female";
  setSelectedGender: (gender: "male" | "female") => void;
  selectedDepartment: string;
  setSelectedDepartment: (department: string) => void;
  selectedPart: string;
  setSelectedPart: (selectedPart: string) => void;
  symptoms: Symptoms[];
  setSymptoms: (symptoms: Symptoms[]) => void;
  selectedSymptoms: string[];
  setSelectedSymptoms: (selectedSymptoms: string[]) => void;
  predictedDiseases: string[];
  setPredictedDiseases: (disease: string[]) => void;
}

const useSelftestStore = create<State>()((set) => ({
  selectedGender: "male",
  setSelectedGender: (gender) => set({ selectedGender: gender }),
  selectedDepartment: "이비인후과",
  setSelectedDepartment: (department) =>
    set({ selectedDepartment: department }),
  selectedPart: "",
  setSelectedPart: (selectedPart) => set({ selectedPart }),
  symptoms: [],
  setSymptoms: (symptoms) => set({ symptoms }),
  selectedSymptoms: [],
  setSelectedSymptoms: (symptoms) => set({ selectedSymptoms: symptoms }),
  predictedDiseases: [],
  setPredictedDiseases: (diseases) => set({ predictedDiseases: diseases })
}));

export default useSelftestStore;
