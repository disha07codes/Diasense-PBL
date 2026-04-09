"use client";
import { useEffect, useState } from "react";
import { PageWrapper } from '@/components/PageWrapper'
import { Dashboard } from '@/components/Dashboard'

export default function Home() {
  return (
    <PageWrapper title="Dashboard">
      <Dashboard />
    </PageWrapper>
  )
}