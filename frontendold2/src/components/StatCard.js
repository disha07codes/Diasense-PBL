import React from "react";
import { Card, CardContent } from "./Card";

export function StatCard({ 
  label, 
  value, 
  unit,
  icon,
  trend,
  trendValue 
}) {

  const getTrendSymbol = () => {
    if (trend === "up") return "↑";
    if (trend === "down") return "↓";
    return "→";
  };

  const getTrendColor = () => {
    if (trend === "up") return "red";
    if (trend === "down") return "green";
    return "gray";
  };

  return (
    <Card>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          
          <div>
            <p style={{ fontSize: "14px", color: "gray" }}>{label}</p>

            <div style={{ display: "flex", alignItems: "baseline", gap: "5px" }}>
              <span style={{ fontSize: "28px", fontWeight: "bold" }}>
                {value}
              </span>
              {unit && (
                <span style={{ fontSize: "12px", color: "gray" }}>
                  {unit}
                </span>
              )}
            </div>

            {trend && trendValue && (
              <p style={{ fontSize: "12px", color: getTrendColor(), marginTop: "5px" }}>
                {getTrendSymbol()} {trendValue}
              </p>
            )}
          </div>

          {icon && (
            <div style={{ opacity: 0.3 }}>
              {icon}
            </div>
          )}

        </div>
      </CardContent>
    </Card>
  );
}