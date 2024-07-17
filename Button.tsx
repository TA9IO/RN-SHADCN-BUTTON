import * as React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle, TextStyle, StyleProp, PressableStateCallbackType, useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

const createStyles = (theme: 'light' | 'dark') => StyleSheet.create({
  baseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    paddingVertical: 8,
    paddingHorizontal: 16,
    transition: 'background-color 0.2s, color 0.2s',
  } as ViewStyle,
  default: {
    backgroundColor: Colors[theme].primary, // Primary color
    color: Colors[theme].primaryForeground, // Primary foreground
  } as ViewStyle,
  destructive: {
    backgroundColor: Colors[theme].destructive, // Destructive color
    color: Colors[theme].destructiveForeground, // Destructive foreground
  } as ViewStyle,
  outline: {
    borderColor: Colors[theme].border, // Input border color
    borderWidth: 1,
    backgroundColor: Colors[theme].background, // Background color
    color: Colors[theme].accentForeground, // Accent foreground
  } as ViewStyle,
  secondary: {
    backgroundColor: Colors[theme].secondary, // Secondary color
    color: Colors[theme].secondaryForeground, // Secondary foreground
  } as ViewStyle,
  ghost: {
    backgroundColor: 'transparent',
    color: Colors[theme].accentForeground, // Accent foreground
  } as ViewStyle,
  link: {
    backgroundColor: 'transparent',
    color: Colors[theme].primary, // Primary color
    textDecorationLine: 'underline',
  } as TextStyle,
  defaultSize: {
    height: 40,
    paddingHorizontal: 16,
    paddingVertical: 8,
  } as ViewStyle,
  sm: {
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 8,
  } as ViewStyle,
  lg: {
    height: 44,
    paddingHorizontal: 32,
  } as ViewStyle,
  icon: {
    height: 40,
    width: 40,
  } as ViewStyle,
  defaultText: {
    color: Colors[theme].primaryForeground, // Primary foreground color
    fontSize: 14,
    fontWeight: '500',
  } as TextStyle,
  destructiveText: {
    color: Colors[theme].destructiveForeground, // Destructive foreground color
  } as TextStyle,
  outlineText: {
    color: Colors[theme].accentForeground, // Accent foreground
  } as TextStyle,
  secondaryText: {
    color: Colors[theme].secondaryForeground, // Secondary foreground color
  } as TextStyle,
  ghostText: {
    color: Colors[theme].accentForeground, // Accent foreground
  } as TextStyle,
  linkText: {
    color: Colors[theme].primary, // Primary color
  } as TextStyle,
  lgText: {
    fontSize: 18,
  } as TextStyle,
  disabled: {
    opacity: 0.5,
  } as ViewStyle,
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> & {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
};

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ style, variant = 'default', size = 'default', children, ...props }, ref) => {
    const colorScheme = useColorScheme(); // Get the current color scheme
    // const theme = colorScheme === 'dark' ? 'dark' : 'light';
    const styles = createStyles(colorScheme!);

    const getButtonStyle = (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
      const baseStyles = [
        styles.baseButton,
        styles[variant],
        styles[size === 'default' ? 'defaultSize' : size],
        props.disabled && styles.disabled,
      ];
      if (typeof style === 'function') {
        return [...baseStyles, style(state)];
      }
      return [...baseStyles, style];
    };

    const textStyle: StyleProp<TextStyle> = [
      styles.defaultText,
      styles[`${variant}Text`],
      size === 'lg' && styles.lgText,
    ];

    return (
      <Pressable style={getButtonStyle} ref={ref} role="button" {...props}>
        <Text style={textStyle}>{children as React.ReactNode}</Text>
      </Pressable>
    );
  }
);

Button.displayName = 'Button';

export { Button };
export type { ButtonProps };
