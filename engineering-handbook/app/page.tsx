"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layout, Users, Activity, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="flex-1 flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
            v1.0.0 Beta
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-600 pb-2">
            Engineering Handbook
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your central hub for career development, role expectations, and team health monitoring.
            Designed to empower engineers and leaders.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <Link href="/career-framework">
                Explore Framework <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/team-health">
                Check Team Health
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="py-20 px-4 container max-w-screen-2xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={item}>
            <Link href="/career-framework" className="block h-full group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Layout className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Career Framework</CardTitle>
                  <CardDescription>
                    Detailed role expectations across Individual Contributor and Management tracks.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>IC Track (GSE to Principal)</li>
                    <li>Management Track (EM to SHoSE)</li>
                    <li>Competencies & Scope</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link href="/artefacts" className="block h-full group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Artefacts</CardTitle>
                  <CardDescription>
                    Key documents and templates associated with each role and engineering process.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Design Docs & RFCs</li>
                    <li>Incident Reports</li>
                    <li>Growth Plans</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          <motion.div variants={item}>
            <Link href="/team-health" className="block h-full group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Activity className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Team Health</CardTitle>
                  <CardDescription>
                    Metrics and reporting structures for maintaining high-performing teams.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Weekly Team Reporting</li>
                    <li>Monthly Business Reporting</li>
                    <li>Quarterly Vendor Reporting</li>
                  </ul>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
