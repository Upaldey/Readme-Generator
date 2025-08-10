import { create } from "zustand";
import ALL_SECTIONS from "../data/availableSections";
const defaultState = [ALL_SECTIONS[0]];

const getInitialState = () => {
  try {
    const storedState = localStorage.getItem("readme-builder-state");
    if (storedState) return JSON.parse(storedState);
  } catch (error) {
    console.error("Could not parse state from localStorage", error);
  }
  // Default initial state
  return defaultState;
};

const useReadmeStore = create((set) => ({
  sections: getInitialState(),
  addSection: (sectionToAdd) =>
    set((state) => ({
      sections: [...state.sections, sectionToAdd],
    })),
  removeSection: (id) =>
    set((state) => ({
      sections: state.sections.filter((s) => s.id !== id),
    })),
  updateSectionContent: (id, newContent) =>
    set((state) => ({
      sections: state.sections.map((s) =>
        s.id === id ? { ...s, content: newContent } : s
      ),
    })),
  moveSection: (index, direction) =>
    set((state) => {
      const newSections = [...state.sections];
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= newSections.length) {
        return state; // Can't move outside bounds
      }
      // Swap elements
      [newSections[index], newSections[targetIndex]] = [
        newSections[targetIndex],
        newSections[index],
      ];
      return { sections: newSections };
    }),
  resetSections: () => set({ sections: defaultState }),
}));

export default useReadmeStore;
