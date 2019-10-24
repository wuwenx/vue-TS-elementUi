##vue-property-decorator
vue-property-decorator 是一个非官方库，是 vue-class-component 的很好的补充。它可以让vue的某些属性和方法，通过修饰器的写法让它也写到vue组件实例的类里面。比如 @Prop @Watch @Emit。
##Component.registerHooks
如果您使用一些Vue插件，比如Vue Router，您可能希望类组件解析它们提供的钩子。对于这种情况，组件。registerHooks允许您注册这样的钩子
##注意事项
在导入任何组件之前，请确保注册（在引入VUE之前注册）