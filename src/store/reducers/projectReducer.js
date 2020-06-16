const initState = {
    projects: [
        {id: '1', title: 'hi hello there this is first', content: 'blah blaa blaaa'},
        {id: '2', title: 'what s your name sir?', content: 'blah2 blaa2 blaaa2'},
        {id: '3', title: 'this is how we do', content: 'blah3 blaa3 blaaa3'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT': 
        console.log('created project', action.project)
        return state;
        case 'CREATE_PROJECT_ERROR':
        console.log('create project error', action.err);
        return state;
      default: 
      return state;  
    }
}

export default projectReducer;