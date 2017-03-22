import projects from '../../data/projects';

const state = {
    projects: []
};

const mutations = {
    'SET_PROJECT' (state, projects) {
        state.projects = projects;
    },
    'ADD_PROJECT' (state, {id, client, project, designer, startDate, dueDate}) {
        state.projects.push({
            id: id,
            client: client,
            project: project,
            designer: designer,
            startDate: startDate,
            dueDate: dueDate
        });
    }
};

const actions = {
    initProjects: ({commit}) => {
        commit('SET_PROJECT', projects);
    },
    addProject: ({commit}, project) => {
        commit('ADD_PROJECT')
    }
}

const getters = {
    projects: state => {
        return state.projects;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
