#include <node.h>

namespace hw {
    using v8::Exception;
    using v8::FunctionCallbackInfo;
    using v8::Isolate;
    using v8::Local;
    using v8::Number;
    using v8::Object;
    using v8::String;
    using v8::Value;

    void Method(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();
        args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Hello World !"));
    }

    void Sum(const FunctionCallbackInfo<Value>& args) {
        Isolate* isolate = args.GetIsolate();
        
        double total = args[0].As<Number>()->Value() + args[1].As<Number>()->Value();
        Local<Number> num = Number::New(isolate, total);

        args.GetReturnValue().Set(num);
    }

    void init(Local<Object> exports) {
        NODE_SET_METHOD(exports, "hw", Method);
        NODE_SET_METHOD(exports, "sum", Sum);
    }

    NODE_MODULE(NODE_GYP_MODULE_NAME, init)
}