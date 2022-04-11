import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: 'm1',
                    image: 'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg',
                    title: 'A trip to the mountains',
                    description: 'It was a really nice trip!'
                },
                {
                    id: 'm2',
                    image: 'https://cdn.pixabay.com/photo/2017/04/08/10/23/surfing-2212948_960_720.jpg',
                    title: 'Surfing the seaside',
                    description: 'It was a thing that we did!'
                },
                {
                    id: 'm3',
                    image: 'https://cdn.pixabay.com/photo/2020/02/28/12/43/bibimbap-4887417_960_720.jpg',
                    title: 'Good eating',
                    description: 'We ate stuff!'
                }
            ]
        };
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.image,
                description: memoryData.description
            };

            state.memories.unshift(newMemory);
        } 
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId);
            }
        }
    }
});

export default store;