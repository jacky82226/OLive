// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
export const convert_form = {
  target_opset: '10',
  model_type: 'tensorflow',
  model_inputs_names: '',
  model_input_shapes: '',
  model_outputs_names: '',
  caffe_model_prototxt: '',
  initial_types: '',
  input_json: '',
  model_params: '',
  model: null,
};
export const perf_tuning_form = {
  model: '',
  config: 'RelWithDebInfo',
  mode: 'times',
  execution_provider: '',
  repeated_times: '20',
  duration_times: '10',
  parallel: true,
  threadpool_size: '',
  num_threads: '',
  top_n: '3',
  optimization_level: '3',
};
