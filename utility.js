
const styles = {
    homePageComponent:{
        classes: [],
        hasChildrens: true,
            childrens:{
                h1: {
                    classes: ['text-4xl', 'mb-8', 'text-center']
                }
            }
    },
    navigationsComponent: {
        classes: ['absolute', 'top-0', 'bootom-0', 'left-0', 'right-0'],
        hasChildrens: false
    },
    homeButtonComponent: {
        classes: ['rounded-br-full', ' relative', 'z-10', 'bg-gradient-to-r', 'from-gray-200', 'via-gray-400', 'to-gray-600', 'homeButton'],
        hasChildrens: true,
        childrens: {
            img: {
                classes: ['w-8', 'h-8', 'ml-1'],
                hasChildrens: true,
                childrens: {
                    img2: {
                        classes: ['hijo de segundo nivel'],
                        hasChildrens: false
                    }
                }
            },
            div: {
                classes: ['prueba'],
                hasChildrens: false
            }
        }
    },
    nextPrevButtonsComponent:{
        classes: ['fixed' ,'w-screen' ,'flex' ,'justify-between',' top-1/2' ,'z-10'],
        hasChildrens: true,
        childrens:{
            div: {
                hasChildrens: false,
                classes: ['p-4']
            }
        }
    },
    layoutComponent: {
        classes: ['bg-gray-300'],
        hasChildrens: true,
        childrens:{
            main: {
                classes: ['container', 'mx-auto', 'max-w-xl', 'pt-8', 'min-h-screen'],
                hasChildrens: false
            }
        }
    },
    pokeListComponent: {
        classes: ['p-4', 'border-gray', 'my-4', 'flex', 'items-center', 'text-lg', 'bg-gray-200'],
        hasChildrens: true,
        childrens: {
            img: {
                classes: ['w-20', 'h-20', 'mx-8'],
                hasChildrens: false
            },
            p: {
                classes: ['capitalize', 'text-center'],
                hasChildrens: false
            }
        }
    }
}

const getTWClasses = (string, syles=styles) => {
    const data = styles[string]
    const parentClasses = data.classes

    if(data.hasChildrens){

        const childrensClasses = {}
        
        Object.keys(data.childrens).forEach(key => {
            
            if(data.childrens[key].hasChildrens){
                const deepChilds = data.childrens[key].childrens
                Object.keys(deepChilds).forEach(key => {
                    childrensClasses[key] = deepChilds[key].classes
                })
            }
            //APLICAR RECURSIVIDAD AUXILIOOOOOOO
            childrensClasses[key] = data.childrens[key].classes
        }) 
        return [parentClasses.join(' '), childrensClasses]
    }

    return parentClasses.join(' ')
}

export default getTWClasses