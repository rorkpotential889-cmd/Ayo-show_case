'use client';

import { motion } from 'framer-motion';
import { comfyUIWorkflows } from '../../../content/comfyui-workflows';
import { Card, CardDescription, CardTitle } from '../../../components/ui/Card';
import Image from 'next/image';

export default function ComfyUIPage() {
  return (
    <div className="container py-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold">ComfyUI Workflows</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced AI image generation workflows built with ComfyUI, ControlNet, and custom nodes
          </p>
        </motion.div>

        {/* Workflows Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comfyUIWorkflows.map((workflow, idx) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                {/* Image Section */}
                <div className="relative h-64 bg-muted overflow-hidden">
                  {workflow.image ? (
                    <Image
                      src={workflow.image}
                      alt={workflow.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => {
                        // Fallback will show
                      }}
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/mockups/comfyui-workflow.svg"
                        alt="ComfyUI Workflow"
                        className="w-full h-full object-contain p-8"
                      />
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {workflow.title}
                    </CardTitle>
                    <CardDescription className="mt-2">{workflow.description}</CardDescription>
                  </div>

                  {/* Use Case */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Use Case:</h4>
                    <p className="text-sm text-muted-foreground">{workflow.useCase}</p>
                  </div>

                  {/* Features */}
                  {workflow.features && workflow.features.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {workflow.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-8"
        >
          <p className="text-muted-foreground mb-6">
            Need a custom ComfyUI workflow for your project?
          </p>
          <a href="/contact">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium">
              Get Custom Workflow
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
