export default function Resolvers(){
  let app = this;

  const Tacos = app.service('taco');

  return {
    RootQuery: {
      allTacos(root, args, context){
        return Tacos.find({});
      },
      tacos(root, {meat}, context){
        return Tacos.find({
          query: {
            meat
          }
        })
      },
      taco(root, { _id }, context ){
        return Taco.get(_id);
      }
    },

    RootMutation: {
      createTaco(root, data, context){
        return Tacos.create(data, context);
      }
    }

  }
}