(ns datatype-expansion.test-cases)

(def simple-example-1
  {
                        :type {
                               :properties {
                                            :manufacturer {
                                                           :type "string",
                                                           :required true
                                                           },
                                            :numberOfSIMCards {
                                                               :type "number",
                                                               :required true
                                                               },
                                            :kind {
                                                   :type "string",
                                                   :required true
                                                   }
                                            },
                               :additionalProperties true,
                               :type "object",
                               :required true
                               },
                        :required true
   })

(def complex-example-1
  {
   :properties {
                :phone {
                        :type {
                               :properties {
                                            :manufacturer {
                                                           :type "string",
                                                           :required true
                                                           },
                                            :numberOfSIMCards {
                                                               :type "number",
                                                               :required true
                                                               },
                                            :kind {
                                                   :type "string",
                                                   :required true
                                                   }
                                            },
                               :additionalProperties true,
                               :type "object",
                               :required true
                               },
                        :required true
                        },
                :device {
                         :type {
                                :type "union",
                                :anyOf [
                                     {
                                      :properties {
                                                   :manufacturer {
                                                                  :type "string",
                                                                  :required true
                                                                  },
                                                   :numberOfSIMCards {
                                                                      :type "number",
                                                                      :required true
                                                                      },
                                                   :kind {
                                                          :type "string",
                                                          :required true
                                                          }
                                                   },
                                      :additionalProperties true,
                                      :type "object",
                                      :required true
                                      },
                                     {
                                      :properties {
                                                   :manufacturer {
                                                                  :type "string",
                                                                  :required true
                                                                  },
                                                   :numberOfUSBPorts {
                                                                      :type "number",
                                                                      :required true
                                                                      },
                                                   :kind {
                                                          :type "string",
                                                          :required true
                                                          }
                                                   },
                                      :additionalProperties true,
                                      :type "object",
                                      :required true
                                      }
                                     ],
                                :required true
                                },
                         :required true
                         }
                },
   :additionalProperties true,
   :type {
          :type "union",
          :anyOf [
               {
                :properties {
                             :manufacturer {
                                            :type "string",
                                            :required true
                                            },
                             :numberOfSIMCards {
                                                :type "number",
                                                :required true
                                                },
                             :kind {
                                    :type "string",
                                    :required true
                                    }
                             },
                :additionalProperties true,
                :type "object",
                :required true
                },
               {
                :properties {
                             :manufacturer {
                                            :type "string",
                                            :required true
                                            },
                             :numberOfUSBPorts {
                                                :type "number",
                                                :required true
                                                },
                             :kind {
                                    :type "string",
                                    :required true
                                    }
                             },
                :additionalProperties true,
                :type "object",
                :required true
                }
               ],
          :required true
          },
   :required true
   })
