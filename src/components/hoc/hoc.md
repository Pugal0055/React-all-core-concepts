# WHY WE ARE NOT USING REACT.FC

In the example I didn't use React.FC because the function signature of the HOC is slightly different from what React.FC expects.

If you Need to Use React.Fc check out the HOC function component.

# Hoc function component

In this version, we are using React.FC as the return type of the HOC function. The EnhancedComponent
is defined as an arrow function that takes the props of the WrappedComponent as its argument. We are
using the useState hook to define the data and userSearchData states, and the useEffect hook to fetch
data from the API and update the data state. Finally, we are passing the data and userSearchData props
to the WrappedComponent using the spread operator.

# Write hoc component in functional component is good or not ?

Using a functional component to write an HOC can be a good approach because functional components are simpler and easier to read than class components. Functional components can also be written as arrow functions, making them more concise.

Functional components also allow us to use React hooks, which provide a powerful way to manage state, perform side effects, and more. This can simplify the logic of an HOC and make it more efficient.

However, there are cases where a class component may be more appropriate. For example, if you need to manage complex state or use the component lifecycle methods, a class component may be a better fit.

Ultimately, the choice between using a functional component or a class component to write an HOC depends on the specific use case and requirements of the component. Both approaches have their strengths and weaknesses, and the best choice will depend on the specific context in which the HOC is being used.

# why you are writing same parameters two times ?

`
class extends React.Component<
P & { data: any[]; userSearchData: string },
{ data: any[]; userSearchData: string }

> `

In the class extends React.Component definition, we are specifying two generic parameters: P & { data: any[]; userSearchData: string } and { data: any[]; userSearchData: string }.

The first parameter P & { data: any[]; userSearchData: string } is used to represent the props of the component. We are using an intersection type & to combine the P type, which represents the original props of the wrapped component, with an object that has two properties: data and userSearchData.

The second parameter { data: any[]; userSearchData: string } is used to represent the state of the component. Here we are defining a state object that has two properties: data and userSearchData.

So we are specifying these two parameters separately because they represent different things: P & { data: any[]; userSearchData: string } is the props type, and { data: any[]; userSearchData: string } is the state type.

By specifying these types separately, we can ensure that the props and state are correctly typed and can be accessed and updated by the component.

# what is the meaning of p extends object

const SearchHoc = <P extends object>

The line const SearchHoc = <P extends object> defines a generic type parameter P that extends the base object type. This generic type parameter is not directly related to the WrappedComponent and entity parameters of the SearchHoc function.

In the context of the SearchHoc function, WrappedComponent and entity are not related to the generic type parameter P, and can have any type. The P type parameter is intended to represent the props of the wrapped component.

So in this case, the use of P extends object is not directly related to the WrappedComponent and entity parameters, but rather is used to ensure that the props of the wrapped component are compatible with object-based types in TypeScript.
